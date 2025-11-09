@echo off
echo Enter the path to your Minecraft installation folder
echo Ex: C:\Users\<user>\curseforge\minecraft\Instances\TerraFirmaCivilizations-S2
echo Please note this will delete existing data within the instance... You have been warned!
SET /P MC_Path="Path: "

echo Creating Sim links

rmdir /s /q %MC_Path%\kubejs
mklink /d %MC_Path%\kubejs %~dp0\overrides\kubejs

rmdir /s /q %MC_Path%\datapacks
mklink /d %MC_Path%\datapacks %~dp0\overrides\datapacks

rmdir /s /q %MC_Path%\config
mklink /d %MC_Path%\config %~dp0\overrides\config

rmdir /s /q %MC_Path%\ldlib
mklink /d %MC_Path%\ldlib %~dp0\overrides\ldlib

rmdir /s /q %MC_Path%\customnpcs
mklink /d %MC_Path%\customnpcs %~dp0\overrides\customnpcs

rmdir /s /q %MC_Path%\defaultconfigs
mklink /d %MC_Path%\defaultconfigs %~dp0\overrides\defaultconfigs

echo Setup Complete!
pause
