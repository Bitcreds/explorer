var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MarketsSchema = new Schema({
  market: { type: String, index: true },
  coin_symbol: { type: String },
  pair_symbol: { type: String },
  summary: { type: Object, default: {} },
  chartdata: { type: Array, default: [] },
  buys: { type: Array, default: [] },
  sells: { type: Array, default: [] },
  history: { type: Array, default: [] },
});

module.exports = mongoose.model('Markets', MarketsSchema);