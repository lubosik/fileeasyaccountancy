/**
 * Admin Debug: Field Mapping Page
 * 
 * Displays the resolved field mapping table for QA.
 * 
 * Guarded by process.env.NODE_ENV !== 'production'
 */

import { getFieldMap, REQUIRED_FIELDS, OPTIONAL_FIELDS, FieldMappingError } from '@/lib/ghlFieldMap';
import { GHLCustomField } from '@/lib/ghl';

// Force dynamic runtime
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DebugFieldsPage() {
  // Guard: Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="min-h-screen bg-page flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-muted-foreground">
            This page is only available in development mode.
          </p>
        </div>
      </div>
    );
  }

  let fieldMapResult;
  let error: Error | null = null;

  try {
    fieldMapResult = await getFieldMap();
  } catch (err) {
    error = err instanceof Error ? err : new Error(String(err));
    // If it's a FieldMappingError, we can still show partial results
    if (err instanceof FieldMappingError) {
      // Try to get partial result (might be cached)
      try {
        const partial = await getFieldMap();
        fieldMapResult = partial;
      } catch {
        // Ignore
      }
    }
  }

  return (
    <div className="min-h-screen bg-page p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">GHL Field Mapping Debug</h1>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Warning</h2>
            <p className="text-yellow-700">{error.message}</p>
            {error instanceof FieldMappingError && error.missingFields.length > 0 && (
              <div className="mt-2">
                <p className="text-sm font-medium text-yellow-800">Missing Required Fields:</p>
                <ul className="list-disc list-inside text-sm text-yellow-700 mt-1">
                  {error.missingFields.map(field => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {fieldMapResult ? (
          <>
            {/* Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Mapping Summary</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {Object.keys(fieldMapResult.mapping).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Fields Mapped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">
                    {fieldMapResult.missingRequired.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Missing Required</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {fieldMapResult.missingOptional.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Missing Optional</div>
                </div>
              </div>
            </div>

            {/* Field Mapping Table */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Field Mapping</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Friendly Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        GHL Field ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Field Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Required Fields */}
                    {REQUIRED_FIELDS.map(friendlyName => {
                      const fieldId = fieldMapResult!.mapping[friendlyName];
                      const isMissing = fieldMapResult!.missingRequired.includes(friendlyName);
                      const field = fieldMapResult!.allFields.find(f => f.id === fieldId);

                      return (
                        <tr key={friendlyName} className={isMissing ? 'bg-red-50' : ''}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                            {friendlyName}
                            <span className="ml-2 text-xs text-red-600">*</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">
                            {fieldId || <span className="text-red-600">NOT FOUND</span>}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                            {field?.fieldType || '-'}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isMissing ? (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                Missing
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                Mapped
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}

                    {/* Optional Fields */}
                    {OPTIONAL_FIELDS.map(friendlyName => {
                      const fieldId = fieldMapResult!.mapping[friendlyName];
                      const isMissing = fieldMapResult!.missingOptional.includes(friendlyName);
                      const field = fieldMapResult!.allFields.find(f => f.id === fieldId);

                      return (
                        <tr key={friendlyName} className={isMissing ? 'bg-yellow-50' : ''}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                            {friendlyName}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">
                            {fieldId || <span className="text-yellow-600">NOT FOUND</span>}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                            {field?.fieldType || '-'}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {isMissing ? (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Optional
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                Mapped
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* All Discovered Fields */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                All Discovered Fields ({fieldMapResult.allFields.length})
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Field ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fieldMapResult.allFields.map(field => (
                      <tr key={field.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">
                          {field.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          {field.name}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                          {field.fieldType}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-muted-foreground">
              Failed to load field mapping. Check that GHL custom fields discovery is configured.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

