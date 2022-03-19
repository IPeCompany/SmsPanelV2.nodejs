# sms.ir
sms.ir node.js package

## Installation
```
import {Smsir} from 'smsir-js'
```

## Usage
- Express, Node.js, etc
```javascript
const {Smsir} = require('smsir-js')
/**
 *
 * @param {string} api_key
 * @param {int} line_number
 */
const smsir = new Smsir(api_key, line_number)
```
- Vue.js, React.js, etc
```javascript
import {Smsir} from 'smsir-js'
/**
 *
 * @param {string} api_key
 * @param {int} line_number
 */
const smsir = new Smsir(api_key, line_number)
```

### Send Bulk
Send message to multiple mobile numbers

```javascript
  /**
 *
 * @param {string} MessageText
 * @param {array<string>} Mobiles
 * @param {number|null} SendDateTime
 * @param {int|null} line_number
 * @constructor
 */
smsir.SendBulk(MessageText, Mobiles, SendDateTime, line_number)
```

### Send Like To Like
Send multiple messages to multiple mobile numbers pair to pair

```javascript
  /**
 *
 * @param {array<string>} MessageTexts
 * @param {array<string>} Mobiles
 * @param {number|null} SendDateTime
 * @param {int|null} line_number
 * @constructor
 */
smsir.SendLikeToLike(MessageTexts, Mobiles, SendDateTime, line_number)
```

### Delete Scheduled
Delete scheduled message pack

```javascript
  /**
 *
 * @param {string} PackId
 * @constructor
 */
smsir.deleteScheduled(PackId)
```

### Send Verification Code
Send verification code with predefined template

```javascript
  /**
 *
 * @param {string} Mobile
 * @param {int} TemplateId
 * @param {array<object>}Parameters
 * @constructor
 */
smsir.SendVerifyCode(Mobile, TemplateId, Parameters)
```

### Message Report
get report of sent message

```javascript
  /**
 *
 * @param {int} MessageId
 * @constructor
 */
smsir.ReportMessage(MessageId)
```

### Pack Report
get report of sent message pack

```javascript
  /**
 *
 * @param {string} PackId
 * @constructor
 */
smsir.ReportPack(PackId)
```

### Today Report
get report of Today sent Messages

```javascript
  /**
 *
 * @param {number} pageSize default is 10
 * @param {number} pageNumber default is 1
 * @constructor
 */
smsir.ReportToday(pageSize, pageNumber)
```

### Archived Report
get report of Archived Messages

```javascript
  /**
 *
 * @param {number|null} fromDate
 * @param {number|null} toDate
 * @param {number} pageSize
 * @param {number} pageNumber
 * @constructor
 */
smsir.ReportArchived(fromDate, toDate, pageSize, pageNumber)
```

### Latest Received Report
get report of latest received messages

```javascript
  /**
 *
 * @param {number} count
 * @constructor
 */
smsir.ReportLatestReceived(count)
```

### Today Received Report
get report of today received messages

```javascript
  /**
 *
 * @param {number} pageSize default is 10
 * @param {number} pageNumber default is 1
 * @constructor
 */
smsir.ReportTodayReceived(pageSize, pageNumber)
```

### Archived Received Report
get report of today received messages

```javascript
  /**
 *
 * @param {number|null} fromDate
 * @param {number|null} toDate
 * @param {number} pageSize
 * @param {number} pageNumber
 * @constructor
 */
smsir.ReportArchivedReceived(fromDate, toDate, pageSize, pageNumber)
```

### Get Credit
get account credit

```javascript
  /**
 *
 * @returns {Promise<any>}
 * @constructor
 */
smsir.getCredit()
```

### Get Line Numbers
get account line numbers

```javascript
  /**
 *
 * @returns {Promise<any>}
 * @constructor
 */
smsir.getLineNumbers()
```
### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Credits

-   [IPE Company](https://github.com/IPeCompany)
-   [Pouya Biglari](https://github.com/cryptommer)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

