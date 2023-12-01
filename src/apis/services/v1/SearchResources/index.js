const ResourceData = require('@models/Resources');
const searchResources = async (query) => {
const {subject,classes,resourcestype,price}=query;
  const filter = { };
  if (subject) {
    filter["subject"] = new RegExp(subject, 'i');
  }
  if (classes) {
    filter["class"] = new RegExp(classes, 'i');
  }
  if (resourcestype) {
    filter["resourcestype"] = new RegExp(resourcestype, 'i');
  }
  if (price) {
    filter["price"] = { $lt: price };
  }
  const Results = await ResourceData.find(filter)
    .select("")
    .lean().exec();
  return  Results ;
};
module.exports = {
  searchResources,
};
