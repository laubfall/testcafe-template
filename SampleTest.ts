import {Selector} from "testcafe";

fixture('Sample test')
    .page('http://www.google.de');

test('Sample test', async t => {
    const cookieAccept = Selector("div").withExactText("Alle akzeptieren")
    await t.expect(cookieAccept.exists).ok("Accept cookies is expected to be visible.");
    await t.click(cookieAccept);
    await t.expect(Selector("img").withAttribute("alt", "Google").exists).ok("Google img log is expected to be visible.");
});
