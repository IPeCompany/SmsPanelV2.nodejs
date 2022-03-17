const axios = require('axios');
const ENDPOINT = 'https://api.sms.ir'
let SMSIR_API_KEY
let SMSIR_LineNumber

class Smsir {

  /**
   *
   * @param {string} apikey
   * @param {number} linenumber
   */
  constructor(apikey, linenumber) {
    SMSIR_API_KEY = apikey
    SMSIR_LineNumber = linenumber
  }

  /**
   *
   * @param {string} MessageText
   * @param {array<string>} Mobiles
   * @param {number|null} SendDateTime
   * @param {int|null} line_number
   * @constructor
   */
  async SendBulk(MessageText, Mobiles, SendDateTime = null, line_number = null) {
    return axios({
      method: "POST",
      url: `${ENDPOINT}/v1/send/bulk`,
      headers: {
        "X-API-KEY": SMSIR_API_KEY,
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        lineNumber: line_number ? line_number : SMSIR_LineNumber,
        MessageText,
        Mobiles,
        SendDateTime
      }
    })
  }

  /**
   *
   * @param {array<string>} MessageTexts
   * @param {array<string>} Mobiles
   * @param {number|null} SendDateTime
   * @param {int|null} line_number
   * @constructor
   */
  async SendLikeToLike(MessageTexts, Mobiles, SendDateTime = null, line_number = null) {
    return axios({
      method: "POST",
      url: `${ENDPOINT}/v1/send/liketolike`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        lineNumber: line_number ? line_number : SMSIR_LineNumber,
        MessageTexts,
        Mobiles,
        SendDateTime
      }
    })

  }

  /**
   *
   * @param {string} PackId
   * @constructor
   */
  async deleteScheduled(PackId) {
    return axios({
      method: "DELETE",
      url: `${ENDPOINT}/v1/send/scheduled/${PackId}`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

  }

  /**
   *
   * @param {string} Mobile
   * @param {int} TemplateId
   * @param {array<object>}Parameters
   * @constructor
   */
  async SendVerifyCode(Mobile, TemplateId, Parameters) {
    return axios({
      method: "POST",
      url: `${ENDPOINT}/v1/send/verify/`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        Mobile,
        TemplateId,
        Parameters
      }
    })

  }

  /**
   *
   * @param {int} MessageId
   * @constructor
   */
  async ReportMessage(MessageId) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/send/${MessageId}`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

  }

  /**
   *
   * @param {string} PackId
   * @constructor
   */
  async ReportPack(PackId) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/send/pack/${PackId}`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

  }

  /**
   *
   * @param {number} pageSize
   * @param {number} pageNumber
   * @constructor
   */
  async ReportToday(pageSize = 10, pageNumber = 1) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/send/live/`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        pageSize,
        pageNumber,
      }
    })

  }

  /**
   *
   * @param {number|null} fromDate
   * @param {number|null} toDate
   * @param {number} pageSize
   * @param {number} pageNumber
   * @constructor
   */
  async ReportArchived(fromDate= null , toDate= null, pageSize= 10, pageNumber= 1) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/send/archive/`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        fromDate,
        toDate,
        pageSize,
        pageNumber,
      }
    })

  }

  /**
   *
   * @param {number} count
   * @constructor
   */
  async ReportLatestReceived(count = 100) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/receive/latest`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        count
      }
    })

  }

  /**
   *
   * @param {number} pageSize
   * @param {number} pageNumber
   * @returns {Promise<any>}
   * @constructor
   */
  async ReportTodayReceived(pageSize = 10, pageNumber = 1) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/receive/live`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        pageSize,
        pageNumber,
      }
    })

  }

  /**
   *
   * @param {number|null} fromDate
   * @param {number|null} toDate
   * @param {number} pageSize
   * @param {number} pageNumber
   * @returns {Promise<any>}
   * @constructor
   */
  async ReportArchivedReceived(fromDate= null , toDate= null, pageSize= 10, pageNumber= 1) {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/receive/archive`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      },
      data: {
        fromDate,
        toDate,
        pageSize,
        pageNumber,
      }
    })

  }

  /**
   *
   * @returns {Promise<any>}
   * @constructor
   */
  async getCredit() {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/credit`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

  }

  /**
   *
   * @returns {Promise<any>}
   * @constructor
   */
  async getLineNumbers() {
    return axios({
      method: "GET",
      url: `${ENDPOINT}/v1/line`,
      headers: {
        "X-API-KEY" : SMSIR_API_KEY,
        'ACCEPT' : 'application/json',
        'Content-Type' : 'application/json',
      }
    })

  }
}

module.exports = {
  Smsir
}
