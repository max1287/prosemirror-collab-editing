
import './style.css'
import { setupEditor } from './editor/editor'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="prosemirror-editor">
    </div>
  </div>
`

setupEditor(document.querySelector<HTMLButtonElement>('#prosemirror-editor')!)
