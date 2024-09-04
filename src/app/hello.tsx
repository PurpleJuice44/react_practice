import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial == 1 ? <b>I'm admin</b> : (isSpecial == 2 ? <b>I'm User</b> : <b>I'm Guest</b> )}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;