const { Schema, model, SchemaType } = require("mongoose");

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  picPath: {
    type: String,
  },
  picName: {
    type: String,
  },
});

module.exports = model("Post", postSchema);
