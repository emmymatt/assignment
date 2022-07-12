
class MetadataParser {
    constructor(_version, _channel, _keyField) {
        this._version = _version;
        this._channel = _channel;
        this._keyField = _keyField;
    }

    getVersion() {
        return this._version;
    }

    getChannel() {
        return this._channel;
    }

    getKeyField() {
        return this._keyField;
    }

    setVersion(_version) {
        this._version = _version;
    }

    setChannel(_channel) {
        this._channel = _channel;
    }

    setKeyField(_keyField) {
        this._keyField = _keyField;
    }

    static getKeyFields(input){
        const keyFields = [];
        for(let key of input){
            keyFields.push(key.getKeyField());
        }
        return keyFields;
    }
}

let data=[];
data.push(new MetadataParser('1.0', 'release', 'id'));
data.push(new MetadataParser('2.0', 'releas', 'ide'));
data.push(new MetadataParser('3.0', 'relea', 'ides'));

console.log(MetadataParser.getKeyFields(data));