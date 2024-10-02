const { faker } = require('@faker-js/faker');
const markdownIt = require('markdown-it');
let markdownLibrary = markdownIt({
	html: false,
	breaks: true,
	linkify: true,
});

module.exports = function (data) {
	return data.reduce((obj, member) => {
		return {
			...obj,
			[member.github.toLowerCase()]: {
				login: member.github,
				id: faker.string.uuid(),
				url: `https://github.com/${member.github}`,
				avatarUrl:
					'data:image/png;base64,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OhFAAAEE6iOQw21JBZyjwPpi1BECCCCAQEQCqR2XTMCpC4sYjpoRQAABBOomkNJ1SQScsqC6o9MdAggggEB0Aqmct1jAqQqJHoj6EUAAAQTaIZDCfYsEnKKAduLSKQIIIIBATQSWOnC2gJduXFMIekEAAQQQaJPAEhfOEvCSDduMSNcIIIAAArUSmOvEyQKeu1Gt4PWFAAIIIIDAHDdOEvCcDcSCAAIIIIBALgI/+tGPuotc5CLdFa5whUO2+NnPftZd8pKX7C5xiUscsfXvf//77t///vcR94ypsZfmn/70p+7a1772IZf3a/7xj3/szjzzzG7fvn3diSeeeO7P//nPf3a/+tWvuqte9ard+c9//nP//WgBk++YaFyDAAIIILAWgV6yV7va1brnPve53XOe85xh269+9avdYx/72O5b3/rW8M/3ute9une9613dhS50oe6///1vd+9737v7yEc+Mvysl+jnP//57qSTThpVci/tG93oRoNcv/SlLw33/Pa3v+0e9rCHdR/72MeGf77BDW7QPfWpT+1uf/vbD9e94AUv6J71rGcNP7voRS867He9611v+OdRAibfUdm4CAEEEEBgJQL/+c9/upvd7GbdN7/5zUMEfIc73GF4I37lK1/Z/eQnP+nueMc7du94xzu6BzzgAd0rXvGKQdSf/exnh7fjO93pTt11r3vd7r3vfe+oqp/4xCd2L3/5y7ub3/zm5wr4RS96UffGN76x+8AHPjC83d7vfvcbBPu4xz2u+/vf/97d5ja36d7ylrd0d77znbv+/s985jPdb37zm+6CF7zg3gIm31G5uAgBBBBAYEUCz372s7uPf/zjg/Tudre7DWLt31AvfOELD8J78IMfPFRznetcZ5BgL85rXvOawxtw/8bc/3n961/fPfKRj+xOP/307kEPetDwkfSrX/3q4WePeMQjun/961/DWscdd1z36U9/epD5/e9//+7Xv/71uQK+7W1v213+8pcfruv/PPnJT+4+8YlPdF/72teGtU855ZTu61//+vCz73//+8Nb9+c+97nu1re+9e4CJt8Vp8lWCCCAAAKjCPQf/97ylrfsfvzjHw8f/97udrc79yPoBz7wgYP8+rfN/uevec1ruq985SvDR8f9W2cv7f5ttP/Tv432HxX31x04cGAQ+fve977he9x+nW984xvdDW94w+4Pf/hDd61rXat72cte1v385z8f7tv5CPpNb3pT99CHPrR7/vOfP6z5kpe8ZPjIuf8Yuhd/L+f+bbz/OLr/LviEE04Y3pgf8pCHHFvA5DtqDlyEAAIIILAigb/85S/dNa5xje6FL3zhILFb3OIWhwi4l93jH//44fvWf/zjH92lLnWp4SPni13sYsMbbv8d8U1ucpOh4p3vkPuPsa9//et3j3rUo4aPq/s/z3jGM7qnPe1p3VlnndXd85737C5+8Yt3b3/727vnPe95hwj4i1/8YnerW91quGdnz/e///3Dm/blLne5Qc692Hd+MevSl770sO4TnvCEowuYfFecJlshgAACCIwm0H803H8c/NrXvrY73/nON4is/x734Q9/eHeZy1xm+E3jl770pYOEe5f1b8dXucpVune+853d8ccfP/wC1j3ucY9hv+9+97vDvf1H0P1vS/dvur0ge5H2v+n8f//3f9173vOe4Xvdd7/73cMva73tbW/r9u/fP3xU3X8XfMUrXnF4G3/rW9/aXeACF+ie9KQnDdf8+c9/7u5+97sPH3v3H4/3b9i9hHuRf/SjH+3uete7Hilg8h09By5EAAEEEFiZQP/LTTvfqfZb92+v/VvuTW9600GU97nPfYbvaC972csOlfW/hdx/LNz/QlT/S1v9b0X3kuz/9HJ9ylOeMlzf/3nMYx4zyLN/c+4l3n+M3b8R73wv3F/zy1/+chB1/9vO/UfJ/XfMvZzve9/7Dmt8+ctfHt7Kv/e973Uf/OAHB1n3wu3d2n80fpe73KX7xS9+MbyNH/Jb0OS78iTZDgEEEEBgEYH+t557sfZvmT/84Q+HN85esE9/+tO7v/71r8Pb7pWudKVBgv2/e/Ob3zx8t/u73/1u+Ai7v/cNb3hD98lPfnL4bri/rl+n/w63f0M+/O/79r/13P+SVf8d8P/+97/hrbuX8Ote97rhDbmX9oc+9KFh/f7j6V64n/rUp7qrX/3q3aMf/eju29/+dveDH/xgeBM+V8D9F8M7r8gH/wXiRWTcjAACCCCAQEYCBwu436YXbP/G+9Of/nTYtRfohz/84e7KV77y8BbcC7H/Hrj/c+Mb33j4OLv/+8H998r9bzn33/P2/9x/vNxf/53vfGf45a2dPy9+8YuHX+Ta+SWs/q32mc98ZveFL3xhuKT/+Lr/K0l9Xf33x/1H4a961auGn/Vv6v1H4P16/cfRZ5xxRnfcKaecclb/Gfjh/+sdGZlZGgEEEEAAgWwE+hfKXoD922//3ezBf/qPkfvvj/tfkkr1p/9fwuo/mu492v9VqIP/9H7tf95Lvv8rTTufNvdvzMft37//rP4/9F9Q+4MAAggggAACeQn0f9WpF/P/AwK4+31TmSywAAAAAElFTkSuQmCC',
				name: member.name || member.github,
				bioHTML: member.bio ? markdownLibrary.render(member.bio) : null,
				websiteUrl: member.mainUrl || `https://github.com/${member.github}`,
			},
		};
	}, {});
};
