const mongoose = require('mongoose');

/**
 * Token blacklist model to prevent reuse of JWT tokens
 */
const blackListTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "Token is required to be added in Blacklist"]
    }
  },
  {
    timestamps: true
  }
);

const tokenBlackListModel = mongoose.model("BlacklistTokens", blackListTokenSchema);

module.exports = tokenBlackListModel;