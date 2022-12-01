package main

import (
	"os"
	"strconv"
	"strings"
)

var totalFood = 0
var top3Total = 0
var top3 [3]int

func main() {
	inputBytes, err := os.ReadFile("input.txt")

	if err != nil {
		return
	}

	inputText := string(inputBytes)
	processInput(inputText)
	println("most food:", totalFood)
	println("top3 total:", top3Total)
}

func processInput(i string) {
	lines := strings.Split(i, "\n")

	elfTotal := 0
	for _, line := range lines {
		if line == "" {
			for i, v := range top3 {
				if elfTotal > v {
					if i+1 < len(top3) {
						top3[i+1] = v
					}
					top3[i] = elfTotal
					break
				}
			}
			if elfTotal > totalFood {
				totalFood = elfTotal
			}
			elfTotal = 0
		}
		total, err := strconv.Atoi(line)
		if err == nil {
			elfTotal += total
		}
	}

	for _, v := range top3 {
		top3Total += v
	}
}
