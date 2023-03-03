import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  &::before {
    content: '';
    background-image: url('https://an2-img.amz.wtchn.net/image/v2/lv7M4yCWyJneDX2iR8hRpQ.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZM01qWTNNVGcxTnpBNU5ETTNOamd6TlNKOS5yRWx4YkVtYzVPVzZhZW5WdnRCcDBVTWhHS1BwVWhVYXhmU2tYZlRUTC1N');
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
  &::after {
    content: '';
    background: rgb(18, 18, 24);
    opacity: 0.8;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    top: 0;
    left: 0;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 95px;
  margin: 20px 0 0 0;
`;

export const Header = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  z-index: 10;
  position: fixed;
  top: 0;

  button {
    background-color: #fff;
    padding: 8px 17px;
    right: 0;
    margin-top: 23px;
    border-radius: 20px;
    border: none;
    font-weight: 700;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;
  }
`;

export const DescWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  a {
    font-size: 12px;
    color: #fff;
    font-weight: 100;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #f82f62;
  font-weight: 700;
  color: #fff;
  border: none;
  border-radius: 40px;
  margin-top: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #f82f62;
    opacity: 0.5;
  }
`;

export const LoginUnderline = styled.div`
  width: 300px;
  height: 20px;
  border-bottom: solid 1px rgba(154, 151, 161, 0.2);
`;

export const ErrorDesc = styled.span`
  color: rgb(248, 47, 98);
  margin-top: 15px;
  font-size: 12px;
`;

export const SocialLogin = styled.div`
  width: 300px;
  /* display: flex;
  justify-content: center; */
  color: #fff;
  font-weight: 200;
  margin: 15px 0 13px;
  letter-spacing: -0.1px;
  font-size: 12px;
  opacity: 0.6;
`;

export const SocialIconContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const SocialIcon = styled.img`
  width: 38px;
  height: 38px;
`;

export const Wrong = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gSW52YWxpZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29ucy0vLVNldHRpbmdzLS8tSW52YWxpZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IngtY2lyY2xlLWYiIGZpbGw9IiNEQjQyNDEiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4wNzA1NTU2LDE3LjA3IEMxMy4xODE2NjY3LDIwLjk1ODg4ODkgNi44MTgzMzMzMywyMC45NTg4ODg5IDIuOTI5NDQ0NDQsMTcuMDcgQy0wLjk1ODg4ODg4OSwxMy4xODE2NjY3IC0wLjk1ODg4ODg4OSw2LjgxODMzMzMzIDIuOTI5NDQ0NDQsMi45Mjk0NDQ0NCBDNi44MTgzMzMzMywtMC45NTg4ODg4ODkgMTMuMTgxNjY2NywtMC45NTg4ODg4ODkgMTcuMDcsMi45Mjk0NDQ0NCBDMjAuOTU4ODg4OSw2LjgxODMzMzMzIDIwLjk1ODg4ODksMTMuMTgxNjY2NyAxNy4wNzA1NTU2LDE3LjA3IEwxNy4wNzA1NTU2LDE3LjA3IFogTTEzLjg5Mzg4ODksNy42NjM4ODg4OSBMMTIuMzM2MTExMSw2LjEwNjExMTExIEwxMCw4LjQ0Mjc3Nzc4IEw3LjY2Mzg4ODg5LDYuMTA2MTExMTEgTDYuMTA2NjY2NjcsNy42NjM4ODg4OSBMOC40NDI3Nzc3OCwxMCBMNi4xMDY2NjY2NywxMi4zMzYxMTExIEw3LjY2Mzg4ODg5LDEzLjg5Mzg4ODkgTDEwLDExLjU1NzIyMjIgTDEyLjMzNjExMTEsMTMuODkzODg4OSBMMTMuODkzODg4OSwxMi4zMzYxMTExIEwxMS41NTcyMjIyLDEwIEwxMy44OTM4ODg5LDcuNjYzODg4ODkgTDEzLjg5Mzg4ODksNy42NjM4ODg4OSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
  position: absolute;
  top: 12px;
  right: 10px;
`;

export const Correct = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5JY29ucyAvIFNldHRpbmdzIC8gVmFsaWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbnMtLy1TZXR0aW5ncy0vLVZhbGlkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY2hlY2stY2lyY2xlLWYiIGZpbGw9IiMzQ0FBRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwxOS45OTg4ODg5IEM0LjUwMDU1NTU2LDE5Ljk5ODg4ODkgMC4wMDExMTExMTExMSwxNS40OTg4ODg5IDAuMDAxMTExMTExMTEsOS45OTk0NDQ0NCBDMC4wMDExMTExMTExMSw0LjUwMTExMTExIDQuNTAwNTU1NTYsMC4wMDExMTExMTExMSAxMCwwLjAwMTExMTExMTExIEMxNS40OTk0NDQ0LDAuMDAxMTExMTExMTEgMTkuOTk4ODg4OSw0LjUwMTExMTExIDE5Ljk5ODg4ODksOS45OTk0NDQ0NCBDMTkuOTk4ODg4OSwxNS40OTg4ODg5IDE1LjQ5OTQ0NDQsMTkuOTk4ODg4OSAxMCwxOS45OTg4ODg5IEwxMCwxOS45OTg4ODg5IFogTTEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBMOC4xMTk0NDQ0NCwxMS4yOTYxMTExIEw2LjA0NjY2NjY3LDkuMjYgTDQuNDQzODg4ODksMTAuODM0NDQ0NCBMOC4xMTk0NDQ0NCwxNC40NDUgTDkuNzIyMjIyMjIsMTIuODcwNTU1NiBMMTUuMDAwNTU1Niw3LjY4NTU1NTU2IEwxMy4zOTc3Nzc4LDYuMTEwNTU1NTYgTDEzLjM5Nzc3NzgsNi4xMTA1NTU1NiBaIE04LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBMOS43MjIyMjIyMiwxMi44NzA1NTU2IEw4LjExOTQ0NDQ0LDExLjI5NjExMTEgTDguMTE5NDQ0NDQsMTEuMjk2MTExMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
  position: absolute;
  top: 12px;
  right: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
`;
