param([int]$Port = 8000)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not (Get-Command php -ErrorAction SilentlyContinue)) {
  Write-Error "PHP is required. Run 'php -S localhost:$Port router.php' after installing PHP."
  exit 1
}
Set-Location $root
php -S "localhost:$Port" router.php
