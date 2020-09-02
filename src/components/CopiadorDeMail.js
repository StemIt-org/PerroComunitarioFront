import React, { Component } from 'react'
import {Popover , OverlayTrigger} from 'react-bootstrap'
export class CopiadorDeMail extends Component {
    render() {
        const copyToClipboard = () => {
            const el = document.createElement('textarea');
            el.value = "perrocomunitario@gmail.com";
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
          }

          const popover = (
            <Popover id="popover-basic">
              <Popover.Content id="asdasd">
                Email copiado al portapapeles! <br/>Pegalo haciendo CTRL + V!
              </Popover.Content>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <p onClick={copyToClipboard} className="footer-email">Email</p>
            </OverlayTrigger>
          );

        return (
            <>
                {/* <p onClick={copyToClipboard} className="footer-email">Email</p> */}
                <Example />
            </>
        )
    }
}

export default CopiadorDeMail
