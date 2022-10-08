const keyboardEventHandler = (e) => {
    const p = document.createElement("p");
    p.innerHTML = `
      key: ${e.key},<br/>
      keycode: ${e.keyCode} (deprecated),<br/>
      code: ${e.code},<br/>
      which: ${e.which} (deprecated),<br/>
      type: ${e.type},<br/>
      ctrlKey: ${e.ctrlKey ? "yes" : "no"},<br/>
      shiftKey: ${e.shiftKey ? "yes" : "no"},<br/>
      metakey: ${e.metaKey ? "yes" : "no"},<br/>
      altKey: ${e.altKey ? "yes" : "no"},<br/>
`;
    document.querySelector(`.${e.type}`).appendChild(p);
};

document.addEventListener("keydown", keyboardEventHandler);
document.addEventListener("keypress", keyboardEventHandler);
document.addEventListener("keyup", keyboardEventHandler);
