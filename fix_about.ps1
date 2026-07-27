$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$path = 'D:\Projects\Portfolio\src\components\About.jsx'
$content = [System.IO.File]::ReadAllText($path)
$content = $content -replace "(?s)<div.*?FaGraduationCap.*?Driems Institute.*?</div>", ""
[System.IO.File]::WriteAllText($path, $content, $utf8NoBom)