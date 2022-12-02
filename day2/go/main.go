package main

import (
	"os"
	"strings"
)

var totalF = 0
var totalS = 0

func main() {
	d, _ := os.ReadFile("../inputs.txt")
	lines := strings.Split(string(d), "\n")

	findTotalF(lines)
	findTotalS(lines)

	println("total points:", totalF)
	println("total points:", totalS)
}

func findTotalF(lines []string) {
	f := make(map[string]int)
	f["A X"] = 7
	f["A Y"] = 8
	f["A Z"] = 3
	f["B X"] = 1
	f["B Y"] = 5
	f["B Z"] = 9
	f["C X"] = 7
	f["C Y"] = 2
	f["C Z"] = 6

	for _, line := range lines {
		totalF += f[line]
	}
}

func findTotalS(lines []string) {
	s := make(map[string]int)
	s["A X"] = 3
	s["A Y"] = 4
	s["A Z"] = 8
	s["B X"] = 1
	s["B Y"] = 5
	s["B Z"] = 9
	s["C X"] = 2
	s["C Y"] = 6
	s["C Z"] = 7

	for _, line := range lines {
		totalS += s[line]
	}
}
