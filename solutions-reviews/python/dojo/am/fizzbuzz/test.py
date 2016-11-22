import unittest
from fizzbuzz import fizz_buzz

class FizzBuzzTest(unittest.TestCase):
    def test_islist(self):
        self.assertIsInstance(fizz_buzz(), list)

    def test_first_step(self):
        self.assertEqual(fizz_buzz(1), [1])

    def test_second_step(self):
        self.assertEqual(fizz_buzz(2), [1, 2])

    def test_fizz_step(self):
        self.assertEqual(fizz_buzz(3), [1, 2, "fizz"])

    def test_buzz_step(self):
        self.assertEqual(fizz_buzz(15)[4], "buzz")

    def test_fizzbuzz_step(self):
        self.assertEqual(fizz_buzz(15)[14], "fizzbuzz")

if __name__ == '__main__':
    unittest.main()
