<?
    function auth(string $login, string $pass) 
    {
        if ($login !== "qwe" || $pass !== '123') return 0;
		
		 return 1;
    }

print_r(auth("qwe","123")); 