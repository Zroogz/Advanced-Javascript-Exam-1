import { useState } from 'react';

const textareaStyle = {
  width: '300px',
  height: '150px',
  overflowWrap: 'break-word',
};

const pStyle = {
  fontFamily: 'monospace',
  fontSize: '14px',
  textAlign: 'right',
  marginTop: '4px',
};

export default function LimitedTextarea() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        maxLength={200}
        onChange={(e) => setText(e.target.value)}
        style={textareaStyle}
      />
      <p style={pStyle}>{text.length} / 200</p>
    </div>
  );
}