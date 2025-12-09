#!/usr/bin/env python3
"""
Convert Markdown knowledge base to PDF
"""

import markdown
import os
from pathlib import Path
from datetime import datetime
from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import re

def markdown_to_pdf(md_file, pdf_file):
    """Convert markdown file to PDF"""
    
    # Convert Path objects to strings
    md_file = str(md_file)
    pdf_file = str(pdf_file)
    
    # Read markdown file
    with open(md_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Create PDF
    doc = SimpleDocTemplate(
        pdf_file,
        pagesize=A4,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=72
    )
    
    # Container for the 'Flowable' objects
    story = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor='#E2551C',
        spaceAfter=30,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    heading1_style = ParagraphStyle(
        'CustomHeading1',
        parent=styles['Heading1'],
        fontSize=18,
        textColor='#E2551C',
        spaceAfter=12,
        spaceBefore=12,
        fontName='Helvetica-Bold'
    )
    
    heading2_style = ParagraphStyle(
        'CustomHeading2',
        parent=styles['Heading2'],
        fontSize=14,
        textColor='#E2551C',
        spaceAfter=8,
        spaceBefore=8,
        fontName='Helvetica-Bold'
    )
    
    heading3_style = ParagraphStyle(
        'CustomHeading3',
        parent=styles['Heading3'],
        fontSize=12,
        textColor='#333333',
        spaceAfter=6,
        spaceBefore=6,
        fontName='Helvetica-Bold'
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=10,
        textColor='#333333',
        spaceAfter=6,
        alignment=TA_JUSTIFY,
        leading=14
    )
    
    bullet_style = ParagraphStyle(
        'CustomBullet',
        parent=styles['Normal'],
        fontSize=10,
        textColor='#333333',
        spaceAfter=4,
        leftIndent=20,
        bulletIndent=10,
        leading=14
    )
    
    # Split content into lines
    lines = md_content.split('\n')
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        if not line:
            story.append(Spacer(1, 6))
            i += 1
            continue
        
        # Title
        if line.startswith('# FILE EASY'):
            story.append(Paragraph(line.replace('#', '').strip(), title_style))
            story.append(Spacer(1, 12))
            i += 1
            continue
        
        # H1 headings
        if line.startswith('# ') and not line.startswith('# FILE EASY'):
            text = line.replace('#', '').strip()
            if '=' in text and text.count('=') > 10:
                # Skip separator lines
                i += 1
                continue
            story.append(Paragraph(text, heading1_style))
            story.append(Spacer(1, 12))
            i += 1
            continue
        
        # H2 headings
        if line.startswith('## '):
            text = line.replace('##', '').strip()
            story.append(Paragraph(text, heading2_style))
            story.append(Spacer(1, 8))
            i += 1
            continue
        
        # H3 headings
        if line.startswith('### '):
            text = line.replace('###', '').strip()
            story.append(Paragraph(text, heading3_style))
            story.append(Spacer(1, 6))
            i += 1
            continue
        
        # Bullet points
        if line.startswith('- '):
            text = line.replace('-', '').strip()
            # Handle bold in bullets
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
            # Handle links
            text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<link href="\2" color="blue"><u>\1</u></link>', text)
            story.append(Paragraph(f"• {text}", bullet_style))
            i += 1
            continue
        
        # Numbered lists
        if re.match(r'^\d+\.\s', line):
            text = re.sub(r'^\d+\.\s', '', line)
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
            text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<link href="\2" color="blue"><u>\1</u></link>', text)
            story.append(Paragraph(f"• {text}", bullet_style))
            i += 1
            continue
        
        # Regular text
        text = line
        # Handle bold
        text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
        # Handle links
        text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<link href="\2" color="blue"><u>\1</u></link>', text)
        # Handle code blocks
        text = re.sub(r'`([^`]+)`', r'<font face="Courier">\1</font>', text)
        
        # Skip separator lines
        if '=' in line and len(line.replace(' ', '').replace('=', '')) == 0:
            i += 1
            continue
        
        if text and text.strip():
            story.append(Paragraph(text, normal_style))
        
        i += 1
    
    # Build PDF
    doc.build(story)
    print(f"✓ PDF created: {pdf_file}")

if __name__ == '__main__':
    downloads_dir = Path.home() / "Downloads"
    md_file = downloads_dir / f"File_Easy_Knowledge_Base_{datetime.now().strftime('%Y%m%d')}.md"
    
    # Find the most recent markdown file if exists
    if not md_file.exists():
        md_files = list(downloads_dir.glob("File_Easy_Knowledge_Base_*.md"))
        if md_files:
            md_file = max(md_files, key=lambda p: p.stat().st_mtime)
        else:
            print(f"Error: Markdown file not found: {md_file}")
            exit(1)
    
    pdf_file = downloads_dir / f"File_Easy_Knowledge_Base_{datetime.now().strftime('%Y%m%d')}.pdf"
    
    print(f"Converting {md_file.name} to PDF...")
    markdown_to_pdf(md_file, pdf_file)
    
    file_size = pdf_file.stat().st_size / 1024 / 1024
    print(f"\n✅ PDF Knowledge Base Created Successfully!")
    print(f"📄 File: {pdf_file.name}")
    print(f"📁 Location: {pdf_file}")
    print(f"📊 Size: {file_size:.2f} MB")

