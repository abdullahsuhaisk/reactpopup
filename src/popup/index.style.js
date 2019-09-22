import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .button {
    height: 40px;
    line-height: 40px;
    background: blue;
    padding: 0 15px;
    border-radius: 14px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 1 0;
  }

  .popup-openned {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    border-radius: 3px;
    > label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    .popup-openned-inner {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      translation: 400ms all;
      background: #fff;
      z-index: 2;
      min-width: 300px;
      box-sizing: border-box;
      max-height: 100%;
      overflow: auto;
      border-radius: 3px;
      .close-popper {
        margin-top: 15px;
        border-top: 1px solid #ddd;
        padding-top: 15px;
        label {
          background: rgba(0, 0, 0, 0.05);
          display: block;
          line-height: 30px;
          text-align: center;
          font-size: 13px;
          color: #444;
          border-radius: 3px;
          cursor: pointer;
          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
    .header {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      position: sticky;
      top: 0;
      background: #fff;
      h6 {
        font-size: 15px;
        font-weight: 500;
      }
      label {
        font-size: 14px;
        color: #999;
        cursor: pointer;
        &:hover {
          color: #222;
        }
      }
    }
    .content {
      padding: 5px 15px 15px;
      p {
        font-size: 13px;
        line-height: 130%;
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  > input {
    position: absolute;
    left: -9999px;
    opacity: 0;
    &:checked + .popup-openned {
      opacity: 1;
      visibility: visible;
      .popup-openned-inner {
        top: 50%;
      }
    }
  }
`;
