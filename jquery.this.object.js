
let originalOn = $.fn.on;

$.fn.on = function(...args)
{
	for(let key in args)
	{
		if(typeof(args[key]) == "function")
		{
			let originalCallback = args[key];

			args[key] = function(...args)
			{					
				var res = $(this);

        // Compatability for another plugin
				if($MemberHandler != null)
					res = new Proxy(res, $MemberHandler);

				originalCallback.bind(res)(...args);
			}
		}
	}
	
	originalOn.bind(this)(...args);
}
