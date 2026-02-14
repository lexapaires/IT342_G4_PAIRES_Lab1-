package com.paires.mobile

import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Enables the modern edge-to-edge look
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        // Handles system bar padding to ensure the "Flavo" design isn't cut off
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // Trigger for the Profile Modal pop-up
        val profileButton = findViewById<Button>(R.id.profileButton)
        profileButton.setOnClickListener {
            val modal = ProfileModal()
            modal.show(supportFragmentManager, "ProfileModal")
        }
    }
}