export class Email {
  sentFrom;
  sendTo;
  subject;
  body;
  constructor(sentFrom, sendTo, subject, body) {
    this.sentFrom = sentFrom;
    this.sendTo = sendTo;
    this.subject = subject;
    this.body = body;
  }
}