$u = New-Object System.Text.UTF8Encoding($false)
$p = 'D:\Projects\Portfolio\src\components\About.jsx'
$t = [IO.File]::ReadAllText($p)
$t = $t -replace '(?s)<div class="flex-wrap.*?</div>', '<div class="flex-wrap gap-4">' -replace 'import \{ FaGraduationCap \}.*\r?\n', ''
[IO.File]::WriteAllText($p, $t, $u)