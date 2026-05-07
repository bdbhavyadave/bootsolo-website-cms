'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Heading1, Heading2, List, ListOrdered, Quote, Code } from 'lucide-react'

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base focus:outline-none min-h-[500px] p-4 border border-t-0 border-[#ddd] rounded-b-md bg-white',
      },
    },
  })

  if (!editor) {
    return null
  }

  const MenuBar = () => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem', padding: '0.5rem', background: '#f8fafc', border: '1px solid #ddd', borderRadius: '6px 6px 0 0', flexWrap: 'wrap' }}>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run() }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('bold') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Bold size={16} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run() }}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('italic') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Italic size={16} />
        </button>
        <div style={{ width: '1px', background: '#cbd5e1', margin: '0 0.25rem' }}></div>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 1 }).run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('heading', { level: 1 }) ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Heading1 size={16} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('heading', { level: 2 }) ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Heading2 size={16} />
        </button>
        <div style={{ width: '1px', background: '#cbd5e1', margin: '0 0.25rem' }}></div>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('bulletList') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <List size={16} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleOrderedList().run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('orderedList') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <ListOrdered size={16} />
        </button>
        <div style={{ width: '1px', background: '#cbd5e1', margin: '0 0.25rem' }}></div>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBlockquote().run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('blockquote') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Quote size={16} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleCodeBlock().run() }}
          style={{ padding: '0.4rem', borderRadius: '4px', background: editor.isActive('codeBlock') ? '#e2e8f0' : 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <Code size={16} />
        </button>
      </div>
    )
  }

  return (
    <div className="rich-text-editor">
      <MenuBar />
      <EditorContent editor={editor} />
      <style dangerouslySetInnerHTML={{__html: `
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror h1 { font-size: 2em; font-weight: bold; margin-bottom: 0.5em; }
        .ProseMirror h2 { font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; margin-top: 1em; }
        .ProseMirror p { margin-bottom: 1em; line-height: 1.6; }
        .ProseMirror ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1em; }
        .ProseMirror blockquote { border-left: 3px solid #cbd5e1; padding-left: 1em; color: #475569; font-style: italic; }
        .ProseMirror pre { background: #1e293b; color: #f8fafc; padding: 1em; border-radius: 6px; overflow-x: auto; font-family: monospace; }
      `}} />
    </div>
  )
}
