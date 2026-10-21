export const seed = [
['Dragon Ball Z: Budokai Tenkaichi 3','PS2','Carlos','2026-10-20','https://github.com/z3xox/Tenkaichi3Decomp/releases/tag/v0.1.38'],
['Dragon Ball Z: Budokai 3 HD Collection','PS3','Carlos','2026-10-18','https://github.com/novapowers0/DBZ-Budokai-3-HD-Collection/releases/tag/v1.5.1.3'],
['Dragon Ball Z: Burst Limit','PS3','Carlos','2026-10-18','https://github.com/iExplosiveRage/DBZ-Burst-Limit-Recompiled/releases/tag/v0.6.1-alpha'],
['Super Smash Bros. Ultimate','Switch','Carlos','2026-10-18','https://github.com/madkils/BurstLimit-PC-Port-Public-Beta-1/releases'],
['Super Mario Galaxy','Wii','Carlos','2026-10-20','https://github.com/keepvaibin/nebula/releases/tag/v1.0.0'],
['Def Jam: Fight for NY','PS2','Carlos','2026-10-20','https://github.com/vyanhursky/DefJamFFNY-recomp/releases/tag/v0.10.5'],
['God of War III','PS3','Carlos','2026-10-20','https://github.com/FelipePrado0/SpartanPort/releases/tag/windows-v2.6.0'],
['Crash Team Racing Nitro-Fueled','PS4','Carlos','2026-10-14','https://github.com/Ryu7w7/OCTR-NitroFueled-PC/releases/tag/v0.4'],
['Shadow of the Colossus','PS2','Carlos','2026-10-14','https://github.com/AjncSystem/ShadowOfTheColossus-PC'],
['inFAMOUS Second Son','PS4','Carlos','2026-10-14','https://github.com/HayatoG/iss_pc'],
['Forza Horizon','Xbox 360','Carlos','2026-10-13',''],
] .map((x,i)=>({id:`seed-${i}`,title:x[0],platform:x[1],author:x[2],created_at:x[3],github_url:x[4],cover_url:'',description:'Projeto de recompilação ou port para PC. Confira o repositório para informações e instruções.',status:'Em desenvolvimento'}));
export type Post = typeof seed[number];
