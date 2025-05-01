const axios = require('axios');

const BASE_URL = 'https://api.sms.ir';

class Smsir {
  constructor(apiKey, lineNumber) {
    if (!apiKey || !lineNumber) throw new Error('API key and line number are required.');
    this.apiKey = apiKey;
    this.lineNumber = lineNumber;
  }

  _getHeaders() {
    return {
      'X-API-KEY': this.apiKey,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  _get(url, params = {}) {
    return axios.get(`${BASE_URL}${url}`, {
      headers: this._getHeaders(),
      params
    });
  }

  _post(url, data = {}) {
    return axios.post(`${BASE_URL}${url}`, data, {
      headers: this._getHeaders()
    });
  }

  _delete(url) {
    return axios.delete(`${BASE_URL}${url}`, {
      headers: this._getHeaders()
    });
  }

  async sendBulk(message, mobiles, sendDateTime = null, lineNumber = null) {
    return this._post('/v1/send/bulk', {
      lineNumber: lineNumber || this.lineNumber,
      MessageText: message,
      Mobiles: mobiles,
      SendDateTime: sendDateTime
    });
  }

  async sendLikeToLike(messages, mobiles, sendDateTime = null, lineNumber = null) {
    return this._post('/v1/send/liketolike', {
      lineNumber: lineNumber || this.lineNumber,
      MessageTexts: messages,
      Mobiles: mobiles,
      SendDateTime: sendDateTime
    });
  }

  async deleteScheduled(packId) {
    return this._delete(`/v1/send/scheduled/${packId}`);
  }

  async sendVerifyCode(mobile, templateId, parameters) {
    return this._post('/v1/send/verify/', {
      Mobile: mobile,
      TemplateId: templateId,
      Parameters: parameters
    });
  }

  async reportMessage(messageId) {
    return this._get(`/v1/send/${messageId}`);
  }

  async reportPack(packId) {
    return this._get(`/v1/send/pack/${packId}`);
  }

  async reportToday(pageSize = 10, pageNumber = 1) {
    return this._get('/v1/send/live/', { pageSize, pageNumber });
  }

  async reportArchived(fromDate = null, toDate = null, pageSize = 10, pageNumber = 1) {
    return this._get('/v1/send/archive/', { fromDate, toDate, pageSize, pageNumber });
  }

  async reportLatestReceived(count = 100) {
    return this._get('/v1/receive/latest', { count });
  }

  async reportTodayReceived(pageSize = 10, pageNumber = 1) {
    return this._get('/v1/receive/live', { pageSize, pageNumber });
  }

  async reportArchivedReceived(fromDate = null, toDate = null, pageSize = 10, pageNumber = 1) {
    return this._get('/v1/receive/archive', { fromDate, toDate, pageSize, pageNumber });
  }

  async getCredit() {
    return this._get('/v1/credit');
  }

  async getLineNumbers() {
    return this._get('/v1/line');
  }
}

module.exports = { Smsir };
