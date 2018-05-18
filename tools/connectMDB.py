import pymongo

def get_collection():
    client = pymongo.MongoClient('134.255.221.217', 27017)

    db = client.get_database('socialai')
    collection = db.twitterMessages
    return collection

#get courser of entries with the same id
def get_by_ID(id):
    return get_collection().find({'id': id})

#get just one entry (if static attrubutes like text etc. is needed)
def get_one_by_ID(id):
    return get_collection().find_one({'id': id})

