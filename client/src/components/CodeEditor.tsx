import ReactCodeMirror from '@uiw/react-codemirror';
import React from 'react'
import { tags as t } from '@lezer/highlight';
import { draculaInit } from '@uiw/codemirror-theme-dracula';
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateCodeValue } from '@/redux/slices/compilerSlice';


export default function CodeEditor() {
    const currentLanguage=useSelector((state:RootState)=>state.compilerSlice.currentLanguage)
    const fullCode= useSelector((state:RootState)=>state.compilerSlice.fullCode)
    const dispatch=useDispatch();
  const onChange = React.useCallback((value: string) => {
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <ReactCodeMirror 
    value={fullCode[currentLanguage]} height="calc(100vh - 60px - 50px)"
    extensions={[loadLanguage(currentLanguage)!]}
     onChange={onChange} 
     theme={draculaInit({
        settings: {
          caret: '#c6c6c6',
          fontFamily: 'monospace',
        },
        styles: [
          { tag: t.comment, color: '#6272a4' },
        ]
      })}
     />
  )
}
