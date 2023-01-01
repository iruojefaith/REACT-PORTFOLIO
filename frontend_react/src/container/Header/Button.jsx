import React from 'react'

const Button = () => {

    const onButtonClick = () => {
    fetch('01_IRUOJE_FAITH_Resume.pdf').then(response => {
        response.resume().then(resume => {
            const fileURL = window.URL.createObjectURL(resume);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = '01_IRUOJE_FAITH_Resume.pdf';
            alink.click();
        })
    })
}

  return (
    <>
    <button onClick={onButtonClick}>Download CV </button>
    </>
  )
}
export default Button;