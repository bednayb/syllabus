import unittest
from FizzBuzz import FizzBuzz

class FizzBuzzTest(unittest.TestCase):

    def test_list_lenght(self):
        self.assertEqual(len(FizzBuzz(50)), 50)

    def test_list_last_element(self):
        self.assertEqual(FizzBuzz(31)[30], 31)

    def test_list_param_is_positive(self):
        self.assertRaises(ValueError, FizzBuzz, -1)

    def test_list_param_is_str(self):
        self.assertRaises(TypeError, FizzBuzz, "a")

if __name__ == '__main__':
    unittest.main()
