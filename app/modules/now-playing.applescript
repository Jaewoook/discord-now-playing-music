if application "Music" is running then
    tell application "Music"
        if player state is playing then
            return (get name of current track) & " - " & (get artist of current track)
        else
            return ""
        end if
    end tell
end if
