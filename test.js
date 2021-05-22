const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless:false,args:['--disabled-setuid-sandbox', '--no-sandbox','--lang=fr-FR,fr']})
    const page = await browser.newPage()
    await page.goto('https://www.google.com/maps/')
    await page.type('#searchboxinput', 'Berlin')
    await page.keyboard.press("Enter");    
    await page.waitForTimeout(4000); 

    
    const close_button = await page.waitForSelector("button[data-value='Partager']");
    close_button.click();
   

    
    
   })()