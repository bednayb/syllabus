import unittest
from index import index

class IndexTest(unittest.TestCase):
    def test_empty_list(self):
        self.assertEqual(index([], 1), -1)

    def test_type_list(self):
        self.assertRaises(TypeError, index, "a", 1)

    def test_type_search_int(self):
        self.assertRaises(TypeError, index, [1, 2], "b")

    def test_search_in_haystack_return_index(self):
        self.assertEqual(index(['hey', 'stack', 2], 2), 2)


if __name__ == '__main__':
    unittest.main()
