import React from 'react'
import "./InboxComponent.css"
 
import InboxIcon from "@mui/icons-material/InboxOutlined";

export const InboxComponent = () => {
  return (
    <div className="InboxComponent">
      <div className="inboxnavigationcontainer">
        <div className="Inboxnavigation">
          <div
            style={{
              width: "300px",
              fontSize: "17px",
              position: "relative",
              right: "30px",
            }}
          >
            <InboxIcon
              style={{
                fontSize: "14px",
                marginTop: "10px",
                position: "relative",
                right: "10px",
              }}
            />
            Inbox
          </div>
          <ul className='listscombine'
            style={{
              position: "relative",
              bottom: "35px",
              left: "160px",
              color: " rgb(157, 154, 154)",
              borderLeft:"0.5px solid rgb(157,154,154)"
            }}
          >
            <li>Important</li>
            <li>Other</li>
            <li>Snoozed</li>
            <li>Cleared</li>
          </ul>
        </div>
      </div>
      <div className="firstcontainer">
        <img src="https://app-cdn.clickup.com/inbox-tray-empty.1b1560a84c61c1f9.svg" alt=''/>

        <div className="headermessage">
          <h4>Inbox Zero</h4>
          <p style={{ color: "rgb(186, 185, 185)" }}>
            Congratulations! You cleared your important notifications 🎉
          </p>
        </div>
      </div>
      <div className="secondcontainer">
        <p
          style={{
            color: "rgb(186, 185, 185)",
            fontSize: "12px",
            border: "0.5px solid rgb(186, 185, 185)",
            width: "120px",
            marginLeft: "46%",
            borderRadius: "10px",
          }}
        >
          Motivational Quote
        </p>
        <div className="quoteauthor">
          <h3 style={{ color: "rgb(47, 46, 46)" }}>
            Success is walking from failure to failure with no loss of
            enthusiasm.
          </h3>
          <span style={{ color: "rgb(186, 185, 185)" }}>
            — Winston Churchill
          </span>
        </div>
      </div>
    </div>
  );
}
