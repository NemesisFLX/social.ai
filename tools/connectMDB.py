import pymongo


def get_collection():
    client = pymongo.MongoClient('134.255.221.217', 27017)

    db = client.get_database('socialai')
    collection = db.twitterMessages
    return collection

if __name__ == "__main__":

    collection = get_collection()
    print(collection.find_one())