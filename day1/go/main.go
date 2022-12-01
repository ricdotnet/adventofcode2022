package main

import (
	"os"
	"sort"
	"strconv"
	"strings"
)

var calories = 0
var top3Calories = 0

func main() {
	inputBytes, err := os.ReadFile("../input.txt")

	if err != nil {
		return
	}

	inputText := string(inputBytes)
	processInput(inputText)
	println("most calories:", calories)
	println("top3 calories:", top3Calories)
}

func processInput(i string) {
	lines := strings.Split(i, "\n")

	var elfs string
	elfTotal := 0
	for i, line := range lines {
		if line == "" || i == len(lines)-1 {
			elfs += strconv.Itoa(elfTotal) + "\n"
			if elfTotal > calories {
				calories = elfTotal
			}
			elfTotal = 0
		}
		total, err := strconv.Atoi(line)
		if err == nil {
			elfTotal += total
		}
	}

	processTop3(elfs)
}

func processTop3(e string) {
	elfsParts := strings.Split(e, "\n")
	sort.Slice(elfsParts, func(i, j int) bool {
		return elfsParts[i] > elfsParts[j]
	})
	for i := 0; i < 3; i++ {
		c, _ := strconv.Atoi(elfsParts[i])
		top3Calories += c
	}
}
