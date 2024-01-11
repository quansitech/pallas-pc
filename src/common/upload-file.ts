class UploadFile {
  id: string;
  uid: string;
  url: string;
  name: string;
  constructor(id: string, uid: string, url: string, name: string) {
    this.id = id;
    this.uid = uid;
    this.url = url;
    this.name = name;
  }

  toObject() {
    return {
      id: this.id,
      uid: this.uid,
      url: this.url,
      name: this.name,
    };
  }

  serialize() {
    return {
      type: 'UploadFile',
      value: this.toObject(),
    };
  }

  static isUploadFile(object: UploadFile) {
    return object instanceof UploadFile;
  }
}

export default UploadFile;
