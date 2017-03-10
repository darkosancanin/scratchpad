import { NodejsWebsocketChatPage } from './app.po';

describe('nodejs-websocket-chat App', () => {
  let page: NodejsWebsocketChatPage;

  beforeEach(() => {
    page = new NodejsWebsocketChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
