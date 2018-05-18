from tools.connectMDB import get_by_ID
from tools.connectMDB import get_one_by_ID


class message(object):

    def __init__(self,id):
        entries = get_by_ID(id)
        #TODO define map frome timestamps and likes (and followercount

        #define all attributes
        entry = get_one_by_ID(id)
        self.text = entry['text']
        self.created_at = entry['created_at']
        self.id = entry['id']
        self.id_str = entry['id_str']
        self.source = entry['source']
        self.truncated = entry['truncated']
        self.in_reply_to_status_id = entry['in_reply_to_status_id']
        self.in_reply_to_status_id_str = entry['in_reply_to_status_id_str']
        self.in_reply_to_user_id = entry['in_reply_to_user_id']
        self.in_reply_to_user_id_str = entry['in_reply_to_user_id_str']
        self.in_reply_to_screen_name = entry['in_reply_to_screen_name']
        self.user = entry['user']
        self.geo = entry['geo']
        self.coordinates = entry['coordinates']
        self.place = entry['place']
        self.contributors = entry['contributors']
        self.is_quote_status = entry['is_quote_status']


if __name__ == "__main__":
    # 9.967880685930947e+17 is the ID of the first entry in the Dataset
    m= message(9.967880685930947e+17)