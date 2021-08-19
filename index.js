let puppeteer = require('puppeteer');

async function main(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null})
    let page = await browser.newPage();
    // login
    await page.goto('https://etk.srail.kr/cmc/01/selectLoginForm.do?pageId=TK0701000000');
    await page.type('#srchDvNm01', '2182981201');
    await page.type('#hmpgPwdCphd01', '1111!');
    await page.click('.submit');
    await page.waitForNavigation();

    // datepicker
    // await page.goto('https://etk.srail.kr/hpg/hra/01/selectScheduleList.do?pageId=TK0101010000');

    // await page.type('#dptRsStnCdNm', ''); //수서
    // await page.type('#arvRsStnCdNm', ''); //부산
    
    await page.select('#dptRsStnCd', '0551');
    await page.select('#arvRsStnCd', '0020');

    await page.select('#dptTm', '180000');
    await page.select('#psgInfoPerPrnb1', '2');
    
    // await page.click('.calendar2');
    await page.click('#search-form > fieldset > a').catch(error => { console.log('error', error)});

    if('.trnNo' == '367'){
        await page.click('.btn_small btn_burgundy_dark val_m wx90').catch(error => { console.log('error', error)});
    }
    

    // await page.click('selectDateInfo(20210917)');
    // browser.close();
}

main();

