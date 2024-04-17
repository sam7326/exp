const express = require('express');
const app = express();
const wkhtmltopdf = require('wkhtmltopdf');
const _ = require('lodash');

const PuppeteerHTMLPDF = require('puppeteer-html-pdf');
const htmlPDF = new PuppeteerHTMLPDF();



const html = `<!DOCTYPE html><html lang="en">  <head>    <title></title>    <link rel="stylesheet" type="text/css" href="../../css/fontface.css" />    <style type="text/css">      .kw-offer-letter-body {        text-align: justify;        color: #000;        background: #fff;        font-family: 'Aeonik', 'Open Sans', sans-serif;        font-size: 15px;        line-height: 24px;      }      .kw-offer-letter-body .offer-letter-h1 {        font-weight: bold;        text-align: center;        margin-bottom: 24px;        font-size: 17px;        line-height: 24px;      }      .kw-offer-letter-body .offer-letter-h2 {        font-weight: bold;        text-align: left;        margin-bottom: 0px;        margin-top: 25px;        font-size: 19px;        line-height: 24px;      }      .kw-offer-letter-body .offer-letter-p {        font-size: 15px;        margin-top: 5px;        margin-bottom: 10px;        line-height: 24px;      }      .kw-offer-letter-body .bold {        font-weight: bold;      }      .kw-offer-letter-body .italic {        font-style: italic;      }      .kw-offer-letter-body .underline {        text-decoration: underline;      }      .kw-offer-letter-body .text-center {        text-align: center;      }      .kw-offer-letter-body .text-right {        text-align: right;      }      .kw-offer-letter-body .blank_row {        height: 20px !important; /* overwrites any other rules */      }      .kw-offer-letter-body .ctc-breakup-table {        border: 1px solid black;        border-collapse: collapse;        width: 100%;      }      .kw-offer-letter-body .ctc-breakup-table th {        border: 1px solid black;        border-collapse: collapse;      }      .kw-offer-letter-body .ctc-breakup-table td {        border: 1px solid black;        border-collapse: collapse;        padding-left: 8px;        padding-right: 8px;      }    </style>  </head>  <body class="kw-offer-letter-body">    <table style="width: 100%; margin-bottom: 25px">      <colgroup>        <col span="1" style="width: 100%" />      </colgroup>      <tbody>        <tr>          <td style="text-align: center; background-color: #000; color: #fff">PRIVATE AND CONFIDENTIAL</td>        </tr>      </tbody>    </table>    <table style="width: 100%; margin-bottom: 25px">      <colgroup>        <col span="1" style="width: 50%" />        <col span="1" style="width: 50%" />      </colgroup>      <tbody>        <tr>          <td>            <img src="https://ftp.kaam.work/images/miscellaneous/kaamwork-logo.png" style="width: 175px" />          </td>          <td style="text-align: right; vertical-align: middle; font-size: 13px">17 Apr 2024</td>        </tr>      </tbody>    </table>    <h1 id="offer-letter-h1" style="text-align: center; margin-bottom: 50px">OFFER LETTER</h1>    <p class="offer-letter-p">      Dear mohan,<br />      Based on our recent interactions with you, we are happy to offer you the following position:    </p>    <table      style="border: 1px solid; border-collapse: collapse; border-left: 1px solid; border-right: 1px solid; width: 100%"    >      <colgroup>        <col span="1" style="width: 30%" />        <col span="1" style="width: 70%" />      </colgroup>      <tbody>        <tr>          <td            class="bold"            style="              border: 1px solid;              border-collapse: collapse;              background-color: #f4f7fb;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            Title          </td>          <td            style="              font-weight: normal;              border: 1px solid;              border-collapse: collapse;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            developer          </td>        </tr>        <tr>          <td            class="bold"            style="              border: 1px solid;              border-collapse: collapse;              background-color: #f4f7fb;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            Client (Company)          </td>          <th            style="              border: 1px solid;              border-collapse: collapse;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            <table>              <tr>                <td>                  <img src="https://devftp.kaam.work/documents/10ea6442-62de-4800-b096-d2ad08fa40fd/1713182852-photo.png" style="height: 110px" />                </td>                <td style="vertical-align: middle; padding-left: 10px">&nbsp;&nbsp;kaam.work</td>              </tr>            </table>          </th>        </tr>        <tr>          <td            class="bold"            style="              border: 1px solid;              border-collapse: collapse;              background-color: #f4f7fb;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            Employer          </td>          <td            style="              border: 1px solid;              border-collapse: collapse;              padding-left: 10px;              padding-top: 10px;              padding-bottom: 10px;            "          >            Kaamwork Technologies Private Limited (India)          </td>        </tr>      </tbody>    </table>    <br />    <p class="offer-letter-p">      The purpose of this letter is to summarize the key terms of your full-time position with the Employer. Other terms      and conditions are mentioned as below:<br />    </p>    <h2 class="offer-letter-h2">Start Date</h2>    <p class="offer-letter-p">      Your engagement with the Company will begin no later than      <span class="bold">17 Apr 2024</span> and will continue in accordance with the terms of this      offer letter.    </p>    <h2 class="offer-letter-h2">Remuneration</h2>    <p class="offer-letter-p">       Your annual remuneration on a cost-to-company      (CTC) basis will be INR 30,000 to be paid out as monthly salaries distributed over the year. This      amount will include basic salary, taxable, non-taxable allowances, benefits and other statutory payments, as      applicable.     Additionally, you      will also be receiving a Joining Bonus of INR 2,000 to be paid after deduction of      applicable taxes, along with your first salary paycheck. Please note that the Joining Bonus amount is to be      returned back to the Employer in case your employment is terminated, for any reason, prior to completion of one      year of continued employment since the Start Date.     </p>    <br />    <table class="ctc-breakup-table">      <thead>        <tr>          <th colspan="2" class="text-center">Component Category</th>          <th colspan="1" class="text-center">            Annual CTC <br />            (INR)          </th>          <th colspan="1" class="text-center">            Monthly CTC <br />            (INR)          </th>        </tr>      </thead>      <tbody>        <!-- Earnings rendering -->        <tr>          <td colspan="2">Basic Salary</td>          <td class="text-center">INR 15,000.00</td>          <td class="text-center">INR 1,250.00</td>        </tr>        <tr>          <td colspan="2">HRA</td>          <td class="text-center">INR 7,500.00</td>          <td class="text-center">INR 625.00</td>        </tr>        <tr>          <td colspan="2">Special Allowances</td>          <td class="text-center">INR -14,100.00</td>          <td class="text-center">INR -1,175.00</td>        </tr>        <tr>          <td colspan="2">PF Employer Contribution</td>          <td class="text-center">INR 21,600.00</td>          <td class="text-center">INR 1,800.00</td>        </tr>        <tr>          <td colspan="2">Joining Bonus*</td>          <td class="text-center">INR 2,000.00</td>          <td class="text-center">INR -</td>        </tr>        <!-- Total earnings -->        <tr class="bold">          <td colspan="2" class="text-right">Total(A)</td>          <td class="text-center">INR 32,000.00</td>          <td class="text-center">INR 2,500.00</td>        </tr>        <tr>          <td colspan="4" class="blank_row"></td>        </tr>        <!-- Deductions rendering -->        <tr>          <td colspan="2">Professional Tax</td>          <td class="text-center">INR 2,500.00</td>          <td class="text-center">INR 200.00</td>        </tr>        <tr>          <td colspan="2">PF Employer Contribution</td>          <td class="text-center">INR 21,600.00</td>          <td class="text-center">INR 1,800.00</td>        </tr>        <tr>          <td colspan="2">PF Employee Contribution</td>          <td class="text-center">INR 21,600.00</td>          <td class="text-center">INR 1,800.00</td>        </tr>        <!-- Total deductions -->        <tr class="bold">          <td colspan="2" class="text-right">Total(B)</td>          <td class="text-center">INR 45,700.00</td>          <td class="text-center">INR 3,808.33</td>        </tr>        <tr>          <td colspan="4" class="blank_row"></td>        </tr>        <!-- Total Net pay -->        <tr class="bold">          <td colspan="2" class="text-right">Net Payable Before Tax (C = A {-} B)</td>          <td class="text-center">INR -13,700.00</td>          <td class="text-center">INR -1,308.33</td>        </tr>        <tr>          <td colspan="4" class="blank_row"></td>        </tr>        <tr>          <td colspan="4" class="text-center">*Terms and Conditions as per the Offer Letter</td>        </tr>      </tbody>    </table>    <p class="text-center" style="margin-top: 8px; margin-bottom: 0">      Note - Professional tax is INR 300 for the month of February.    </p>    <br />    <h2 class="offer-letter-h2">       Location / Work From Anywhere    </h2>    <p class="offer-letter-p">        Your role is not physical location-specific. You can work      from a location of your choice provided you are able to (a) provide your team the required time zone overlap, (b)      have a high-speed internet connection for seamless video calls, and (c) are willing to travel to attend periodic      in-person meetings at a predecided location for group discussions.Additionally, you agree to travel in      India or abroad, if necessary to enable you to perform your work in accordance with your employment. You will be      reimbursed for all reasonable costs incurred in line with the Company and Employer's Expenses Policy, which may be      subject to change from time to time.    </p>    <h2 class="offer-letter-h2">Holidays and Leave</h2>    <p class="offer-letter-p">      The Employer declares a list of Public/Festival holidays every year which you also will be entitled to. You will      also be entitled to other leaves as per the policy of the Employer, as applicable.    </p>    <h2 class="offer-letter-h2">Probation Period</h2>    <p class="offer-letter-p">      You are required to serve 3 months of initial probation period, which shall be counted as      part of the first year of service, but it may be extended for a further period as is deemed fit by the Employer.      During this probation period, both the Employer on the instruction of the Company and you shall have the right to      terminate employment at any time, by notifying the other party in writing. In such case, notification must be      issued 15 days in advance and shall be conclusive and binding on each other.    </p>    <h2 class="offer-letter-h2">Termination and Notice Period</h2>    <p class="offer-letter-p">      Post the probation period, both the Employer on the instruction of the Company and you shall have the right to      terminate engagement at any time. Termination by either party shall be subject to a 30 days'      prior written notice being issued simultaneously to the other party and the Employer. Any such termination shall      be conclusive and binding on each party and upon expiry of the aforesaid notice period, your employment with the      Employer shall cease to be effective.<br />      However, in case of fraud, negligence, misconduct or any breach of the engagement terms including the      confidentiality and intellectual property related obligations, the engagement shall stand terminated immediately      without any notice.    </p>    <h2 class="offer-letter-h2">Employment Agreement</h2>    <p class="offer-letter-p">      You will be required to execute an employment agreement with the Employer containing the detailed terms governing      your employment with the Employer.<br />      All other terms and conditions as per the policies applicable to your engagement (from time to time) will be      binding on you.    </p>    <br />    <table style="width: 100%; margin-bottom: 30px">      <colgroup>        <col span="1" style="width: 50%" />        <col span="1" style="width: 50%" />      </colgroup>      <tbody>        <tr>          <td>For and on behalf of</td>          <td style="padding-left: 15px">For and on behalf of '<strong>mohan deep</strong>'</td>        </tr>        <tr>          <th>Kaamwork Technologies Pvt Ltd</th>          <td            style="              font-family: 'Signatria';              font-size: 40px;              padding-top: 40px;              padding-bottom: 30px;              padding-left: 15px;            "          >            mohan deep          </td>        </tr>        <tr>          <td></td>          <td style="text-transform: uppercase; padding-left: 15px">mohan deep</td>        </tr>      </tbody>    </table>    <div style="color: #7c7f88; font-size: 12px">      This is an electronically generated offer letter and does not need any signatures. Supporting documents to      validate the termsof the offer are with Kaamwork Technologies Private Limited or its affiliates.    </div>  </body></html>`


const getpdf = async () => {
    try{
        return await generatePdf2(html);

    } catch(err){
        return err;
    }
}

function generatePdf(html) {
    console.log("initiate generate pdf")
    return new Promise(function (resolve, reject) {
        wkhtmltopdf(
            html,
            {
                pageSize: 'A4',
                orientation: 'portrait',
                marginLeft: '2cm',
                marginTop: '2cm',
                marginBottom: '2cm',
                marginRight: '2cm',
                disableJavascript: true,
                // debug: true,
                quiet: true,
                minimumFontSize: 16,
            },
            function (err, stream) {
                if (!_.isEmpty(err)) {
                    console.error(err);
                    reject(err);
                    return;
                }
                console.log('line 131');
                console.log(stream);
                if (!stream) {
                    reject('Unable to get stream');
                    return;
                }
                const chunks = [];
                let fileBuffer;
                stream.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                stream.once('end', () => {
                    fileBuffer = Buffer.concat(chunks);
                    resolve(fileBuffer);
                });
            },
        );
    });
}

async function generatePdf2(html2) {
    const options = {
        format: 'A4'
      }
    htmlPDF.setOptions(options);

    const pdfData =  {
        invoiceItems: [
          { item: 'Website Design', amount: 5000 },
          { item: 'Hosting (3 months)', amount: 2000 },
          { item: 'Domain (1 year)', amount: 1000 },
        ],
        invoiceData: {
          invoice_id: 123,
          transaction_id: 1234567,
          payment_method: 'Paypal',
          creation_date: '04-05-1993',
          total_amount: 141.5,
        },
        baseUrl: 'https://ultimateakash.com'
      }
      const html = await htmlPDF.readFile(__dirname + '/sample.html','utf8');  
      const template = hbs.compile(html);
      const content = template(pdfData);
        
      try {
        const pdfBuffer = await htmlPDF.create(content); 
        const filePath = `${__dirname}/sample.pdf`
        await htmlPDF.writeFile(pdfBuffer, filePath);
      } catch (error) {
        console.log('PuppeteerHTMLPDF error', error);
      }
      return "done";
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/sign', (req, res, next) => {
    getpdf().then(val=>{
        console.log("running vals"); 
        res.status(200).send(val);
    })
});


app.listen(5007, () => {
    console.log('server running at 5007');
})