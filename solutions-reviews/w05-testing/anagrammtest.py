import unittest
import anagramm

class PrimesTestCase(unittest.TestCase):
    """Tests for `isAnagram.py`."""

    def test_anagram(self):

        self.assertTrue(anagramm.anagramm("Alma","ma la"))
        self.assertTrue(anagramm.anagramm("Alma","ma la"))
        self.assertRaises(TypeError, anagramm.anagramm, 123, 123)


if __name__ == '__main__':
    unittest.main()
