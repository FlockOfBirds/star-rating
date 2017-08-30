
// browser typings are declared globally
class HomePage {
    public get usernameInput() {
        return browser.element("#usernameInput");
    }

    public get passwordInput() {
        return browser.element("#passwordInput");
    }

    public get loginButton() {
        return browser.element("#loginButton");
    }

    public get rateMeButton() {
        return browser.element(".mx-name-actionButton1");
    }

    public get rateMePage() {
        return browser.element("#mxui_widget_Window_0 > div.modal-content.mx-window-content");
    }

    public rateOnPosition(position: number) {
        return browser.element(`#mxui_widget_ReactCustomWidgetWrapper_12 > div > span > span:nth-child(${position})`);
    }

    // when the fullStar width is 0%, then empty star is still visible and that star is not rated.
    public fullStarOnPosition(position: number) {
        // tslint:disable max-line-length
        return browser.element(`#mxui_widget_ReactCustomWidgetWrapper_12 > div > span > span:nth-child(${position}) > span:nth-child(2)`);
    }

    public emptyStarOnPosition(position: number) {
        // tslint:disable max-line-length
        return browser.element(`#mxui_widget_ReactCustomWidgetWrapper_12 > div > span > span:nth-child(${position}) > span:nth-child(1)`);
    }

    public open(): void {
        browser.url("/");
    }
}
const page = new HomePage();
export default page;
