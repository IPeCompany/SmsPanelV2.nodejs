# sms.ir
sms.ir node.js package

## Installation
```
import {Smsir} from 'smsir-js'
```

## Usage
// Usage example for the Smsir class

const { Smsir } = require('./path-to-your-smsir-file');

(async () => {
  try {
    const sms = new Smsir('your-api-key-here', 'your-line-number-here');

    // Send a bulk SMS
    const bulkResponse = await sms.sendBulk('Hello from sms.ir', ['09123456789']);
    console.log('Bulk Response:', bulkResponse.data);

    // Send like-to-like messages
    const likeToLikeResponse = await sms.sendLikeToLike(
      ['Message 1', 'Message 2'],
      ['09123456789', '09351234567']
    );
    console.log('LikeToLike Response:', likeToLikeResponse.data);

    // Send a verification code
    const verifyResponse = await sms.sendVerifyCode('09123456789', 12345, [
      { Parameter: 'Code', ParameterValue: '654321' }
    ]);
    console.log('Verify Response:', verifyResponse.data);

    // Delete a scheduled message
    const deleteResponse = await sms.deleteScheduled('your-pack-id');
    console.log('Delete Scheduled:', deleteResponse.data);

    // Get a report for a specific message
    const messageReport = await sms.reportMessage(123456);
    console.log('Message Report:', messageReport.data);

    // Get a report for a pack
    const packReport = await sms.reportPack('your-pack-id');
    console.log('Pack Report:', packReport.data);

    // Report today's sent messages
    const todayReport = await sms.reportToday();
    console.log("Today's Sent Report:", todayReport.data);

    // Report archived messages
    const archivedReport = await sms.reportArchived(20230101, 20231231);
    console.log('Archived Report:', archivedReport.data);

    // Report latest received messages
    const latestReceived = await sms.reportLatestReceived();
    console.log('Latest Received:', latestReceived.data);

    // Report today's received messages
    const todayReceived = await sms.reportTodayReceived();
    console.log("Today's Received Messages:", todayReceived.data);

    // Report archived received messages
    const archivedReceived = await sms.reportArchivedReceived(20230101, 20231231);
    console.log('Archived Received:', archivedReceived.data);

    // Get account credit
    const credit = await sms.getCredit();
    console.log('Account Credit:', credit.data);

    // Get available line numbers
    const lines = await sms.getLineNumbers();
    console.log('Line Numbers:', lines.data);

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
})();

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Credits

-   [IPE Company](https://github.com/IPeCompany)
-   [Pouya Biglari](https://github.com/cryptommer and https://github.com/rezatutor475)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

