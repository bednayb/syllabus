import unittest
from index import index

class IndexTest(unittest.TestCase):
    def test_empty_list(self):
        self.assertEqual(index([], 1), -1)

    def test_in_nonempty_return_zero(self):
        self.assertEqual(index([1], 1), 0)

    def test_in_nonempty_notfound(self):
        self.assertEqual(index(["krumpli"], 1), -1)

    def test_item_not_in_list(self):
        self.assertEqual(index([1], "krumpli"), -1)

    def test_find_non_first_item(self):
        self.assertEqual(index(["lobab", "kiskutya"], "kiskutya"), 1)

    def test_find_first_item(self):
        self.assertEqual(index(["kiskutya", "lobab"], "kiskutya"), 0)

    def test_find_second_item(self):
        self.assertEqual(index(["kiskutya", "lobab", "roka"], "roka"), 2)





if __name__ == '__main__':
    unittest.main()
