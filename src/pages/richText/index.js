import React, { useState } from 'react'
// 文本编辑器
import { Editor } from 'react-draft-wysiwyg'
import { Button, Card, Modal } from 'antd'
// draft-js 是react的编辑器框架
// draft-js 提供的convertToRaw用于将不可变的数据转换为js对象
// draftToHtml 将内容转换为html
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default function RichText() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [showRichText, setshowRichText] = useState(false)

    const getText = () => {
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        setshowRichText(true)
    }

    const clearText = () => {
        setEditorState(EditorState.createEmpty())
    }

    return (
        <div style={{ width: '100%' }}>
            <Card style={{ height: 450 }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={val => setEditorState(val)}
                />
            </Card>
            <Card style={{ height: 450 }}>
                <Button type='primary' onClick={getText}>提交</Button>
                <Button type='primary' onClick={clearText}>清空内容</Button>
            </Card>

            <Modal
                title='转换后的内容'
                open={showRichText}
                onCancel={() => { setshowRichText(false) }}
            >
                {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            </Modal>
        </div >


    )

}