#!/usr/bin/env bash

# Cross-Platform Test Setup Verification Script
# This script checks if all necessary components are set up for cross-platform testing

set -e

echo "🔍 Cross-Platform Test Setup Verification"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check functions
check_file() {
  if [ -f "$1" ]; then
    echo -e "${GREEN}✓${NC} Found: $1"
    return 0
  else
    echo -e "${RED}✗${NC} Missing: $1"
    return 1
  fi
}

check_dir() {
  if [ -d "$1" ]; then
    echo -e "${GREEN}✓${NC} Found directory: $1"
    return 0
  else
    echo -e "${RED}✗${NC} Missing directory: $1"
    return 1
  fi
}

check_command() {
  if command -v "$1" &> /dev/null; then
    echo -e "${GREEN}✓${NC} Command available: $1"
    return 0
  else
    echo -e "${RED}✗${NC} Command not found: $1"
    return 1
  fi
}

# Track failures
FAILED=0

echo "1️⃣  Checking Feature Files..."
check_file "src/features/cross-platform/CrossPlatformOrder.feature" || ((FAILED++))
check_file "src/features/mobile/AlbaikHome.feature" || ((FAILED++))
check_file "src/features/web/ExampleWeb.feature" || ((FAILED++))
echo ""

echo "2️⃣  Checking Step Definitions..."
check_file "src/step_definitions/cross-platform/CrossPlatformOrderSteps.ts" || ((FAILED++))
check_file "src/step_definitions/mobile/AlbaikHomeSteps.ts" || ((FAILED++))
check_file "src/step_definitions/web/ExampleSteps.ts" || ((FAILED++))
echo ""

echo "3️⃣  Checking Page Objects..."
check_file "src/pages/mobile/HomePage.ts" || ((FAILED++))
check_file "src/pages/web/HomePage.ts" || ((FAILED++))
check_file "src/pages/web/AdminPanel.ts" || ((FAILED++))
echo ""

echo "4️⃣  Checking Locators..."
check_file "src/locators/mobile/Home.ts" || ((FAILED++))
check_file "src/locators/web/Home.ts" || ((FAILED++))
check_file "src/locators/web/AdminPanel.ts" || ((FAILED++))
echo ""

echo "5️⃣  Checking Services..."
check_file "src/services/DataStore.ts" || ((FAILED++))
echo ""

echo "6️⃣  Checking Configuration..."
check_file "wdio.config.ts" || ((FAILED++))
check_file "config/capabilities.ts" || ((FAILED++))
check_file "package.json" || ((FAILED++))
echo ""

echo "7️⃣  Checking External Commands..."
check_command "node" || ((FAILED++))
check_command "npm" || ((FAILED++))
echo ""

echo "8️⃣  Checking Environment Setup..."
if [ -f ".env" ]; then
  echo -e "${GREEN}✓${NC} Found: .env file"
  if grep -q "TEST_PLATFORM" .env; then
    echo -e "${GREEN}✓${NC} TEST_PLATFORM configured in .env"
  else
    echo -e "${YELLOW}⚠${NC} TEST_PLATFORM not configured in .env"
  fi
else
  echo -e "${YELLOW}⚠${NC} .env file not found (will use defaults)"
fi
echo ""

echo "9️⃣  Checking Optional Services..."
check_command "adb" || echo -e "${YELLOW}⚠${NC} adb not found (Android device support)"
check_command "appium" || echo -e "${YELLOW}⚠${NC} appium not installed (run: npm install -g appium)"
echo ""

# Summary
echo "=========================================="
if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ All checks passed!${NC}"
  echo ""
  echo "You can now run:"
  echo "  npm run test:cross-platform"
  echo "  npm run test:cross-platform:staging"
  echo ""
  exit 0
else
  echo -e "${RED}✗ $FAILED check(s) failed${NC}"
  echo ""
  echo "Please ensure all required files are present."
  echo "See CROSS_PLATFORM_TEST_GUIDE.md for setup instructions."
  exit 1
fi
